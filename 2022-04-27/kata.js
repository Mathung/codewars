// Simple assembler interpreter 5 kyu

// This is the first part of this kata series. Second part is here.

// We want to create a simple interpreter of assembler which will support the following instructions:

// mov x y - copies y (either a constant value or the content of a register) into register x
// inc x - increases the content of the register x by one
// dec x - decreases the content of the register x by one
// jnz x y - jumps to an instruction y steps away (positive means forward, negative means backward, y can be a register or a constant), but only if x (a constant or a register) is not zero
// Register names are alphabetical (letters only). Constants are always integers (positive or negative).

// Note: the jnz instruction moves relative to itself. For example, an offset of -1 would continue at the previous instruction, while an offset of 2 would skip over the next instruction.

// The function will take an input list with the sequence of the program instructions and will execute them. The program ends when there are no more instructions to execute, then it returns a dictionary (a table in COBOL) with the contents of the registers.

// Also, every inc/dec/jnz on a register will always be preceeded by a mov on the register first, so you don't need to worry about uninitialized registers.

// Example
// SimpleAssembler.interpret(List("mov a 5","inc a","dec a","dec a","jnz a -1","inc a"))

// ''' visualized:
// mov a 5
// inc a
// dec a
// dec a
// jnz a -1
// inc a
// ''''
// The above code will:

// set register a to 5,
// increase its value by 1,
// decrease its value by 2,
// then decrease its value until it is zero (jnz a -1 jumps to the previous instruction if a is not zero)
// and then increase its value by 1, leaving register a at 1
// So, the function should return

// Map("a"->1)
// ```ocaml simple_assembler ["mov a 5"; "inc a"; "dec a"; "dec a"; "jnz a -1"; "inc a"]

// ''' visualized: mov a 5 inc a dec a dec a jnz a -1 inc a '''

function simple_assembler(program) {
    let result = {};
    let arr = program.map(e => e.split(' '));
    
    for (let i=0;i<arr.length;i++) {
      let instructions = arr[i]; //[mov, a, 5];
      switch (instructions[0]) {
          case 'mov':
              // My program ran into a bug where result[instructions[2]] would get passed over when it was 0 because 0 is falsy.
              // So if result[instructions[2]] is another property being recursively assigned to result[instructions[1]] and decremented, it would
              // pass over 0 and infinitely loop into the negative because jnz x -2 would assign it NaN and continue jnzing
              if (result[instructions[2]] === 0) {
                  result[instructions[1]] = 0;
                  continue;
              }
            result[instructions[1]] = result[instructions[2]] || Number(instructions[2]);
            continue;
          case 'inc':
            result[instructions[1]]++;
            continue;
          case 'dec':
            result[instructions[1]]--;
            continue;
          case 'jnz':
            if (result[instructions[1]] !== 0) {
              i += instructions[2]-1;
            }
            continue;
          default: continue;
      }
    }
    return result;
  }