<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{

    private $products;

    public function __construct(Product $products)
    {
        $this->products = $products;
    }

    public function index()
    {
        $dados = $this->products->paginate(2);
        return $dados;
    }

    public function show($id)
    {
        $dados = $this->products->find($id);
        return $dados;
    }

    public function store(Request $request)
    {
        $data = $request->all();

        $data = $this->products::create($data);
        return $data;
    }

    public function update(Request $request)
    {
        $data = $request->all();
        $product = $this->products->find($data['id']);
        $product->update($data);
        return $data;
    }

    public function destroy($id)
    {
        $product = $this->products->find($id);
        $product->delete();
        return response()->json(['message'=> 'Produto excluido com sucesso!']);
    }
}
