import { Component, OnInit } from '@angular/core';
import { CarritoCompraService } from '../servicios-backend/carrito-compra/carrito-compra.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {
  public listCarritoCompra = [];
  public idCarritoCompra = ""
  public idUsuarios = ""
  public swGuardarCambios = false

  constructor(private carritocompraService: CarritoCompraService) {
    this.GetCarritoCompra();//Se carga el listado cada vez que se abra la pag.
  }

  public GetCarritoCompra(){
    this.carritocompraService.GetCarritoCompra().subscribe({
        next: (response: HttpResponse<any>) => {
            this.listCarritoCompra = response.body;
            //console.log(this.listProducto)
        },
        error: (error: any) => {
            console.log(error);
        },
        complete: () => {
            console.log('complete - this.GetCarritoCompra()');
        },
    });
  }  
  public addCarritoCompra(){
    if (this.idCarritoCompra.length > 0 && this.idUsuarios.length > 0) {
        var entidad = {
            idCarritoCompra : this.idCarritoCompra,
            idUsuarios : this.idUsuarios
        }
        console.log(entidad)
        this.carritocompraService.AddCarritoCompra(entidad).subscribe({
            next: (response: HttpResponse<any>) => {
                console.log(response.body)//1
                if(response.body == 1){
                    alert("Se agrego el Producto con exito :)");
                    this.GetCarritoCompra();//Se actualize el listado
                    this.idUsuarios = "";
                }else{
                    alert("Al agregar el CarritoCompra fallo exito :(");
                }
            },
            error: (error: any) => {
                console.log(error);
            },
            complete: () => {
                console.log('complete - this.addCarritoCompra()');
            },
        });
    }
}

}