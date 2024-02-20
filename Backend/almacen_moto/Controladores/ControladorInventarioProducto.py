from Modelos.InventarioProducto import InventarioProducto
from Modelos.Productos import Productos
from Repositorios.RepositorioInventarioProducto import RepositorioInventarioProducto
from Repositorios.RepositorioProductos import RepositorioProductos

class ControladorInventarioProducto():
    def __init__(self):
        self.repositorioInventarioProducto = RepositorioInventarioProducto()
        self.repositorioProductos = RepositorioProductos()

    def index(self):
        return self.repositorioInventarioProducto.findAll()

    """
    Asignacion producto y proveedor a inventario
    """

    def create(self, infoInventarioProducto):
        nuevoInventario = InventarioProducto(infoInventarioProducto)
        nuevoInventario.inventario = infoInventarioProducto["inventario"]
        nuevoInventario.producto = infoInventarioProducto["producto"]
        return self.repositorioInventarioProducto.save(nuevoInventario)

    def show(self, id):
        print(id)
        elInventarioproducto = self.repositorioInventarioProducto.query({"inventario":id})
        for elInventarioproductosolo in elInventarioproducto:
            print(elInventarioproductosolo)
            idproducto = elInventarioproductosolo["producto"]
            elInventarioproductosolo["producto"]=Productos(self.repositorioProductos.findById(idproducto)).__dict__
        return elInventarioproducto

    """
    Modificación de inventario (producto y proveedor)
    """
    #
    def update(self, id, infoInventarioProducto):
        elInventarioProducto = InventarioProducto(self.repositorioInventarioProducto.findById(id))
        elInventarioProducto.inventario = infoInventarioProducto["inventario"]
        elInventarioProducto.producto = infoInventarioProducto["producto"]

        return self.repositorioInventarioProducto.save(elInventarioProducto)

    def delete(self, id):
        return self.repositorioInventarioProducto.delete(id)