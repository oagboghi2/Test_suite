/**** 1. PALINDROME
 * Checking whether a string is a palindrome
Just as a quick reminder, a palindrome looks unchanged when it’s reversed. 
This means that processing a palindrome can be done from both directions 
and the same result will be obtained
For example, the word madam is a palindrome, while the word madame is not.

Input : "madam"
Output : true

Input : "monsieur"
Output : false
****/

//Write your code here :

import React from "react";

export default class Palindrome extends React.Component {
  state = {
    isPalindrome: false
  };

  render() {
    const input = "madam";

    return (
      <>
        <div>Input: {input}</div>
        <div>Output: {this.state.isPalindrome.toString()}</div>
      </>
    );
  }
}
