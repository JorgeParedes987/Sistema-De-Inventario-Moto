from Modelos.Administrador import Administrador

from Repositorios.RepositorioAdministrador import RepositorioAdministrador


class ControladorAdministrador():

    def __init__(self):
        self.repositorioAdministrador = RepositorioAdministrador()

        print("Creando Controlador Administrador")

    def index(self):
        print("Listar Los Administrador")
        return self.repositorioAdministrador.findAll()

    def create(self, laAdministrador):
        print("Creando Administrador")
        nuevoAdministrador = Administrador(laAdministrador)
        return self.repositorioAdministrador.save(nuevoAdministrador)

    def show(self, id):
        print("Mostrando Administrador Con id ", id)
        laAdministrador = Administrador(self.repositorioAdministrador.findById(id))
        return laAdministrador.__dict__

    def update(self, id, laAdministrador):
        print("Actualizando Administrador con id ", id)
        AdministradorActual = Administrador(self.repositorioAdministrador.findById(id))
        AdministradorActual.identificacion = laAdministrador["identificacion"]
        AdministradorActual.nombre = laAdministrador["nombre"]
        AdministradorActual.telefono = laAdministrador["telefono"]
        AdministradorActual.email = laAdministrador["email"]
        return self.repositorioAdministrador.save(AdministradorActual)

    def delete(self, id):
        print("Elimiando Administrador con id ", id)
        return self.repositorioAdministrador.delete(id)