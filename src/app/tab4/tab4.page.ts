import { Component } from '@angular/core';
import { PlatosService } from '../servicios-backend/platos/platos.service';
import { HttpResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  public listPlatos = [];
  public nombrePlatos = ""
  public precioPlatos = ""
  public idPlatos= ""
  public swGuardarCambios = false

  constructor(public navCtrl: NavController,
      private platosServices: PlatosService) {
      this.GetPlatos();
  }

  private GetPlatos() {
      this.platosServices.GetPlatos().subscribe({
          next: (response: HttpResponse<any>) => {
              this.listPlatos = response.body;
              //console.log(this.listCategoria)
          },
          error: (error: any) => {
              console.log(error);
          },
          complete: () => {
              console.log('complete - this.GetPlatos()');
          },
      });
  }

  public addPlatos() {
      if (this.nombrePlatos.length > 0 && this.precioPlatos.length > 0) {
          var entidad = {
              nombre : this.nombrePlatos,
              precio : this.precioPlatos
          }
          console.log(entidad)
          this.platosServices.AddPlatos(entidad).subscribe({
              next: (response: HttpResponse<any>) => {
                  console.log(response.body)//1
                  if(response.body == 1){
                      alert("Se agrego el Platos con exito :)");
                      this.GetPlatos();//Se actualize el listado
                      this.nombrePlatos = "";
                      this.precioPlatos = "";
                  }else{
                      alert("Al agregar el Platos fallo exito :(");
                  }
              },
              error: (error: any) => {
                  console.log(error);
              },
              complete: () => {
                  console.log('complete - this.addPlatos()');
              },
          });
      }
  }

  public guardarCambios(){
      this.swGuardarCambios = false;
      if (this.nombrePlatos.length > 0) {
          var entidad = {
              id: this.idPlatos,
              nombre : this.nombrePlatos,
              precio : this.precioPlatos
              
          }
          console.log(entidad)
          this.platosServices.UpdatePlatos(entidad).subscribe({
              next: (response: HttpResponse<any>) => {
                  console.log(response.body)//1
                  if(response.body == 1){
                      alert("Se modifico el Platos con exito :)");
                      this.GetPlatos();//Se actualize el listado
                      this.idPlatos = "";
                      this.nombrePlatos = "";
                      this.precioPlatos = "";
                  }else{
                      alert("Al modificar el Platos fallo exito :(");
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

  public updatePlatos(item){
      console.log(item)
      this.idPlatos = item.id//input 
      this.nombrePlatos = item.nombre//input
      this.precioPlatos = item.precio //input
      this.swGuardarCambios = true;
  }

  public deletePlatos(item){
      console.log(item.id)
      this.platosServices.DeletePlatos(item).subscribe({
          next: (response: HttpResponse<any>) => {
              console.log(response.body)//1
              if(response.body == 1){
                  alert("Se elimino el Platos con exito :)");
                  this.GetPlatos();//Se actualize el listado
              }else{
                  alert("Al eliminar el Platos fallo exito :(");
              }
          },
          error: (error: any) => {
              console.log(error);
          },
          complete: () => {
              console.log('complete - this.GetPlatos()');
          },
      });
  }

}
