<?php

namespace App\Http\Controllers;

use App\Http\Models\Material;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response as Response;

class MaterialController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    //

    public function index() {
        try {
            /* $list = DB::table('material')
                    ->select('material.*')
                    ->get(); */
            $list = Material::all();
            return response()->json($list, Response::HTTP_OK);
        } catch (Exception $ex) {
            return response()->json([
                'err' => 'Error al listar!' . $ex->getMessage()
            ], 206);
        }
    }

    public function show(Request $request, $id) {
        try {
            $material = Material::find($id);
            return response()->json($material, Response::HTTP_OK);
        } catch (Exception $ex) {
            return response()->json([
                'err' => 'Error al buscar elemento!' . $ex->getMessage()
            ], 404);
        }
    }

    public function store(Request $request) {
        try {
            $material = Material::create($request->all());
            return response()->json($material, Response::HTTP_CREATED);
        } catch (Exception $ex) {
            return response()->json([
                'err' => 'Error al registrar elemento!' . $ex->getMessage()
            ], 400);
        }
    }

    public function update(Request $request, $id) {
        try {
            $material = Material::findOrFail($id);
            $material->update($request->all());
            return response()->json($material, Response::HTTP_OK);
        } catch (Exception $ex) {
            return response()->json([
                'err' => 'Error al actualizar elemento!' . $ex->getMessage()
            ], 400);
        }
    }

    public function destroy(Request $request, $id) {
        try {
            $material = Material::find($id)->delete();
            return response()->json($material, Response::HTTP_OK);
        } catch (Exception $ex) {
            return response()->json([
                'err' => 'Error al eliminar elemento!' . $ex->getMessage()
            ], 400);
        }
    }
}
