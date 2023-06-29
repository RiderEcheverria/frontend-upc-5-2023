import { Component } from '@angular/core';
import { OrdenesService } from '../servicios-backend/ordenes/ordenes.service';
import { HttpResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {

  public listOrdenes = [];
  public Platos_Id = ""
  public CantidadOrdenes = ""
  public MesaOrdenes = ""
  public idOrdenes= ""
  public swGuardarCambios = false

  constructor(public navCtrl: NavController,
      private ordenesServices: OrdenesService) {
      this.GetOrdenes();
  }

  private GetOrdenes() {
      this.ordenesServices.GetOrdenes().subscribe({
          next: (response: HttpResponse<any>) => {
              this.listOrdenes = response.body;
              //console.log(this.listCategoria)
          },
          error: (error: any) => {
              console.log(error);
          },
          complete: () => {
              console.log('complete - this.GetOrdenes)');
          },
      });
  }

  public addOrdenes() {
      if (this.Platos_Id.length > 0 && this.CantidadOrdenes.length > 0 && this.MesaOrdenes.length > 0) {
          var entidad = {
            Platos_Id : this.Platos_Id,
              Cantidad : this.CantidadOrdenes,
              Mesa : this.MesaOrdenes
          }
          console.log(entidad)
          this.ordenesServices.AddOrdenes(entidad).subscribe({
              next: (response: HttpResponse<any>) => {
                  console.log(response.body)//1
                  if(response.body == 1){
                      alert("Se agrego el Ordenen con exito :)");
                      this.GetOrdenes();//Se actualize el listado
                      this.Platos_Id = "";
                      this.CantidadOrdenes = "";
                      this.MesaOrdenes = "";
                  }else{
                      alert("Al agregar el Orden fallo exito :(");
                  }
              },
              error: (error: any) => {
                  console.log(error);
              },
              complete: () => {
                  console.log('complete - this.addOrdenes()');
              },
          });
      }
  }

  public guardarCambios(){
      this.swGuardarCambios = false;
      if (this.Platos_Id.length > 0 && this.CantidadOrdenes.length > 0 && this.MesaOrdenes.length > 0) {
        var entidad = {
              id: this.idOrdenes,
              Platos_Id : this.Platos_Id,
              Cantidad : this.CantidadOrdenes,
              Mesa : this.MesaOrdenes,
              
          }
          console.log(entidad)
          this.ordenesServices.UpdateOrdenes(entidad).subscribe({
              next: (response: HttpResponse<any>) => {
                  console.log(response.body)//1
                  if(response.body == 1){
                      alert("Se modifico el Ordenen con exito :)");
                      this.GetOrdenes();//Se actualize el listado
                      this.idOrdenes = "";
                      this.Platos_Id = "";
                      this.CantidadOrdenes = "";
                      this.MesaOrdenes = "";
                  }else{
                      alert("Al modificar el orden fallo exito :(");
                  }
              },
              error: (error: any) => {
                  console.log(error);
              },
              complete: () => {
                  console.log('complete - this.guardarCambios()');
              },
          });
      }
  }

  public updateOrdenes(item){
      console.log(item)
      this.idOrdenes = item.id//input 
      this.Platos_Id = item.Platos_Id//input
      this.CantidadOrdenes = item.Cantidad//input
      this.MesaOrdenes = item.Mesa//input
      this.swGuardarCambios = true;
  }

  public deleteOrdenes(item){
      console.log(item.id)
      this.ordenesServices.DeleteOrdenes(item).subscribe({
          next: (response: HttpResponse<any>) => {
              console.log(response.body)//1
              if(response.body == 1){
                  alert("Se elimino el Ordenen con exito :)");
                  this.GetOrdenes();//Se actualize el listado
              }else{
                  alert("Al eliminar el Ordenen fallo exito :(");
              }
          },
          error: (error: any) => {
              console.log(error);
          },
          complete: () => {
              console.log('complete - this.GetOrdenes()');
          },
      });
  }

}
