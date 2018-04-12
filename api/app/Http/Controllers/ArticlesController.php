<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Article;

class ArticlesController extends Controller {

    public function showAllArticles() {
        return response()->json(Article::all());
    }

    public function showOneArticle($id) {
        return response()->json(Article::find($id));
    }

    public function create(Request $req) {

        $this->validate($req, [
            'title' => 'required',
            'author' => 'required',
            'text' => 'required'
        ]);

        try {
            $article = Article::create($req->all());
            $res['succes'] = true;
            $res['message'] = 'Article created';
            return response()->json($res, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['succes'] = false;
            $res['message'] = $ex->getMessage();
            return response()->json($res, 500);
        }
    }

    public function delete($id) {
        try {
            $article = Article::find($id)->delete();
            $res['succes'] = true;
            $res['message'] = 'Article deleted';
            return response()->json($res, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['succes'] = false;
            $res['message'] = $ex->getMessage();
            return response()->json($res, 500);
        }
    }

    public function update(Request $req, $id) {
        $this->validate($req, [
            'title' => 'required',
            'author' => 'required',
            'text' => 'required'
        ]);

        try {
            $article = Article::find($id);
            $article->fill($req->all())->save();
            $res['succes'] = true;
            $res['message'] = 'Article updated';
            return response()->json($res, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['succes'] = false;
            $res['message'] = $ex->getMessage();
            return response()->json($res, 500);
        }
    }

}