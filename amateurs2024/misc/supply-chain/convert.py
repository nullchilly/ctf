def swap_bytes(input_file, output_file):
    with open(input_file, 'rb') as f:
        content = bytearray(f.read())

    # Swap bytes
    for i in range(len(content)):
        if content[i] == 0x09:
            content[i] = 0x20
        elif content[i] == 0x20:
            content[i] = 0x09
        elif content[i] == 0x2d:
            content[i] = 0x5f
        elif content[i] == 0x5f:
            content[i] = 0x2d

    with open(output_file, 'wb') as f:
        f.write(content)

if __name__ == "__main__":
    input_file = "bad-3-corrupt_flag.tar.xz"
    output_file = "valid.xz"

    swap_bytes(input_file, output_file)
    print("swapped!")

