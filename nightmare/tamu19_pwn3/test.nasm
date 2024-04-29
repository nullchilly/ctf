[BITS 32]
section .data
section .text
global _start
  xor esi, esi
  xor edx, edx
  mov ecx, 0x0068732F6E69622F
  push ecx
  mov edi, esp
  xor eax, eax
  mov al, 0x3b
  syscall