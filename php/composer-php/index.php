<?php
 require './vendor/autoload.php';

//  $is_valid = GUMP::is_valid(array_merge($_POST, $_FILES), [
//     'username'       => 'required|alpha_numeric',
//     'password'       => 'required|between_len,4;100',
//     'avatar'         => 'required_file|extension,png;jpg',
//     'tags'           => 'required|alpha_numeric', // ['value1', 'value3']
//     'person.name'    => 'required',               // ['person' => ['name' => 'value']]
//     'persons.*.age'  => 'required'                // ['persons' => [
//                                                   //      ['name' => 'value1', 'age' => 20],
//                                                   //      ['name' => 'value2']
//                                                   // ]]
// ]);

// $data = ['name' => 'ronie peterson', 'age'=> 17, 'email'=>'roniepetersondf@gmail.com'];
// $is_valid = GUMP::is_valid($data,[
//     'name'          => ['required', 'between_len' => [6, 100]],
//     'email'         => ['required', 'valid_email'],
//     'age'           => ['required', 'numeric', ],
// ]);

// var_dump($is_valid);