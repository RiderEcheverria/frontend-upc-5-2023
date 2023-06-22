import { Component} from '@angular/core';
import { HproductoService } from '../servicios-backend/hproducto/hproducto.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page{

  public listHProducto = [];
  public idHProducto = ""
  public cantidad = ""
  public IdProducto = ""
  public IdCarritoCompra = ""
  public swGuardarCambios = false

  constructor(private hproductoService: HproductoService) 
  {
    this.GetHProducto();//Se carga el listado cada vez que se abra la pag.
  }

  public GetHProducto()
  {
    this.hproductoService.GetHProducto().subscribe
    ({
      next:(response: HttpResponse<any>)=>
      {
        this.listHProducto = response.body;
      },
      error: (error: any) => 
      {
        console.log(error);
      },
      complete: () => 
      {
        console.log('complete - this.GetHProducto()');
      },
    });
  }

  public addHProducto()
  {
    if (this.cantidad.length > 0 && this.IdProducto.length > 0 && this.IdCarritoCompra.length > 0) 
    {
      var entidad = 
      {
        cantidad : this.cantidad,
        IdProducto : this.IdProducto,
        IdCarritoCompra : this.IdCarritoCompra
      }
      console.log(entidad)
      this.hproductoService.AddHProducto(entidad).subscribe
      ({
          next: (response: HttpResponse<any>) => 
          {
            console.log(response.body)//1
            if(response.body == 1)
            {
              alert("Se agrego el Detalle del Producto con exito :)");
              this.GetHProducto();//Se actualize el listado
              this.cantidad = "";
              this.IdProducto = "";
              this.IdCarritoCompra = "";
            }
            else
            {
              alert("Al agregar el Producto fallo :(");
            }
          },
          error: (error: any) => 
          {
            console.log(error);
          },
          complete: () => 
          {
            console.log('complete - this.addProducto()');
          },
      });
    }
  }



}