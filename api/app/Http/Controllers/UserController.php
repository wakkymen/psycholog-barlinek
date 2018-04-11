<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\User;

class UserController extends Controller {
    public function login(Request $request) {
        $rules = [
            'email' => 'required',
            'password' => 'required'
        ];

        $customMessages = [
            'required' => ':attribute'
        ];

        $this->validate($request, $rules, $customMessages);

        $email = $request->input('email');

        try {
            $login = User::where('email', $email)->first();
            if ($login) {
                if($login->count() > 0) {
                    if (Hash::check($request->input('password'), $login->password)) {
                        try {
                            $api_token = sha1($login->id_user.time());
                            $create_token = User::where('id', $login->user_id)->update(['api_token' => $api_token]);
                            $res['succes'] = true;
                            $res['message'] = 'Succes login';
                            $res['data'] = $login;
                            $res['api_token'] = $api_token;

                            return response()->json($res, 200);

                        } catch (\Illuminate\Database\QueryException $ex) {
                            $res['succes'] = false;
                            $res['message'] = $ex->getMessage();
                            return response()->json($res, 500);
                        }
                    } else {
                        $res['succes'] = false;
                        $res['message'] = 'Email or password are not correct';
                        return response()->json($res, 401);
                    }
                } else {
                    $res['succes'] = false;
                    $res['message'] = 'Email or password are not correct';
                    return response()->json($res, 401);
                }
            } else {
                $res['succes'] = false;
                $res['message'] = 'Email or password are not correct';
                return response()->json($res, 401);
            }
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['succes'] = false;
            $res['message'] = $ex->getMessage();
            return response()->json($res, 500);
        }
    }
}
