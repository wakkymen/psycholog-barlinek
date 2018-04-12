<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Page;

class PagesController extends Controller {

    public function showAllPages() {
        return response()->json(Page::all());
    }

    public function showOnePage($id) {
        return response()->json(Page::find($id));
    }

    public function create(Request $req) {
        $this->validate($req, [
            'name' => 'required',
            'href' => 'required',
            'role' => 'required',
            'content' => 'required'
        ]);

        try {
            $article = Page::create($req->all());
            $res['succes'] = true;
            $res['message'] = 'Page created';
            return response()->json($res, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['succes'] = false;
            $res['message'] = $ex->getMessage();
            return response()->json($res, 500);
        }
    }

    public function delete($id) {
        try {
            $article = Page::find($id)->delete();
            $res['succes'] = true;
            $res['message'] = 'Page deleted';
            return response()->json($res, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['succes'] = false;
            $res['message'] = $ex->getMessage();
            return response()->json($res, 500);
        }
    }

    public function update(Request $req, $id) {
        $this->validate($req, [
            'name' => 'required',
            'href' => 'required',
            'role' => 'required',
            'content' => 'required'
        ]);

        try {
            $article = Page::find($id);
            $article->fill($req->all())->save();
            $res['succes'] = true;
            $res['message'] = 'Page updated';
            return response()->json($res, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['succes'] = false;
            $res['message'] = $ex->getMessage();
            return response()->json($res, 500);
        }
    }


}