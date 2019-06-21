<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Models\notas;

class NotasController extends Controller{

    public function __construct(){
        $this->model = new notas();
    }

    /**
     * Show all notas
     */
    public function index(){
        $notas = $this->model->get();
      //  return vardump($notas);
        return view('mostrarNotas', compact('notas'));
    }

    public function create(){
        return view('cargarNotas');
    }

    public function save(){
        $promedio=intdiv($_POST['nota1']+$_POST['nota2']+$_POST['nota3'],3);
        $notas = [
            'nombre' => $_POST['nombre'],
            'apellido' => $_POST['apellido'],
            'nota1' => $_POST['nota1'],
            'nota2' => $_POST['nota2'],
            'nota3' => $_POST['nota3'],
            'promedio' => $promedio
        ];
        $this->model->insert($notas);
        $notas = $this->model->get();
        return view('mostrarNotas', compact('notas'));
    }
}
