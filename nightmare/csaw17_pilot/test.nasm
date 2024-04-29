[BITS 64]
section .data
section .text
global _start
  xor rsi, rsi
  xor rdx, rdx
  mov rcx, 0x0068732F6E69622F
  push rcx
  mov rdi, rsp
  xor rax, rax
  mov al, 0x3b
  syscall