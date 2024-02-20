from Modelos.Inventario import Inventario
from Modelos.Productos import Productos
from Modelos.Proveedor import Proveedor
from Repositorios.RepositorioInventario import RepositorioInventario
from Repositorios.RepositorioProductos import RepositorioProductos
from Repositorios.RepositorioProveedor import RepositorioProveedor


class ControladorInventario():
    def __init__(self):
        self.repositorioInventario = RepositorioInventario()
        self.repositorioProductos = RepositorioProductos()
        self.repositorioProveedor = RepositorioProveedor()

    def index(self):
        return self.repositorioInventario.findAll()

    """
    Asignacion producto y proveedor a inventario
    """

    def create(self, infoInventario):
        nuevoInventario = Inventario(infoInventario)
        nuevoInventario.nombre_inventario = infoInventario["nombre_inventario"]
        nuevoInventario.fecha_inventario = infoInventario["fecha_inventario"]
        nuevoInventario.usuario=infoInventario["usuario"]
        return self.repositorioInventario.save(nuevoInventario)

    def show(self, id):
        elInventario = Inventario(self.repositorioInventario.findById(id))
        return elInventario.__dict__

    """
    Modificación de inventario (producto y proveedor)
    """

    def update(self, id, infoInventario):
        elInventario = Inventario(self.repositorioInventario.findById(id))
        elInventario.nombre_inventario = infoInventario["nombre_inventario"]
        elInventario.fecha_inventario = infoInventario["fecha_inventario"]
        elInventario.usuario = infoInventario["usuario"]
        return self.repositorioInventario.save(elInventario)

    def delete(self, id):
        return self.repositorioInventario.delete(id)