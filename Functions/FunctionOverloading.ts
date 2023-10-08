/* 
Function Overloading in TypeScript allows multiple functions with the same name but with different parameters to be defined. 
The correct function to call is determined based on the number, type, and order of the arguments passed to the function at runtime.
*/

namespace FunctionOverloading {
  function add(a: number, b: number): number;
  function add(a: string, b: string): string;

  function add(a: any, b: any): any {
    return a + b;
  }

  console.log(add(1, 2)); // 3
  console.log(add("Hello", " World")); // "Hello World"
  // console.log(add("Hello", 1)); //! Error: No Overload matches this call.
}
