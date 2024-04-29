#include <stdio.h>
#include <stdlib.h>
#include <string.h>

unsigned long* encryption(unsigned long data[], unsigned long size)
{
    unsigned int eax;
    unsigned int edx;
    unsigned int ecx;
    unsigned int byte_address;

    for (byte_address = 0; byte_address < size; byte_address++)
    {
        eax = data[byte_address];
        ecx = eax + 0x11;
        eax = eax + 0xB;
        ecx = eax * ecx;
        edx = ecx;
        edx = edx >> 8;
        eax = edx;
        eax = eax ^ ecx;
        eax = eax >> 0x10;
        eax = eax ^ edx;
        eax = eax ^ ecx;
        data[byte_address] = eax;
    }
    return data;
}

unsigned long* _encryption(void* data, unsigned long size)
{
    unsigned long* data_chunk = NULL;
    unsigned long* result;
    int i;

    if (size & 1) size++;
    data_chunk = (unsigned long*)malloc(size * sizeof(unsigned long));
    if (!data_chunk) return NULL;
    memset(data_chunk, 0, size * sizeof(unsigned long)); // Ensure memory is initialized to zero
    for (i = 0; i < size / 2; i++) data_chunk[i] = ((unsigned short*)data)[i];

    result = encryption(data_chunk, size / 2); // Adjusted the size passed to encryption
    return result;
}

int main(int argc, char *argv[])
{
    if (argc < 2) {
        printf("Usage: %s <text to encrypt>\n", argv[0]);
        return 1; // Exit if no argument is provided
    }

    const char* input = argv[1];
    unsigned long size = strlen(input); // Use the length of the input argument
    // Ensure the input is treated correctly based on how _encryption function is expected to work
    unsigned long* encrypted_data = _encryption((void*)input, size);

    // Print each encrypted unsigned long in hexadecimal format
    printf("Encrypted data in hexadecimal format: ");
    for (unsigned long i = 0; i < (size + 1) / 2; i++) { // Adjusted loop condition based on encryption function logic
        printf("%lx", encrypted_data[i]);
    }
    printf("\n");

    free(encrypted_data); // Remember to free the allocated memory

    return 0;
}
