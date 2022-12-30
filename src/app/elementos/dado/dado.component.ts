import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css'],
  animations:[
    trigger("animacion" ,[
      state("inicio", style({
        color:"aquamarine"
       }) ),
       state("final", style({
        transform:"rotateX(360deg)",
        color: "deepskyblue"

       })),
       transition("inicio <=> final",
          animate("0.5s")
        )
    ])
  ]
})
export class DadoComponent {
   estadoCuadro= "inicio"
   numeros = Array();
   valor = 0
   num_ramdon(){
    this.valor = Math.round((Math.random()*5));

    if(this.numeros.length > 1){
        this.numeros.shift()
    }else{
        this.numeros.push(Number(this.valor));
        do {
          
          this.valor = this.valor+ Math.round((Math.random()*1));
          if(this.numeros[0] === this.valor && this.valor === 6){
            this.valor = Math.round((Math.random()*5));
          }else if( this.valor === this.numeros[0] ){
            this.valor = this.valor+1;
          }else if(this.valor === 7){
            this.valor = this.valor-2;
          }
        } while (this.numeros[0] === this.valor );
        do {
          this.valor = this.valor+1;
          if(this.valor === 7){
            this.valor = this.valor-1;
          }
        } while (this.numeros[1] === this.valor);
    }

    // do {
    //   this.valor = Math.round((Math.random()*6));
    //   do {
    //     this.valor = Math.round((Math.random()*6));

    //   } while (this.numeros[0] === this.valor)
      
    //   if(this.numeros[0] === this.valor && this.valor === 6){
    //     this.valor = Math.round((Math.random()*5));
    //   }else if(this.numeros[0] === this.numeros[0]){
    //     this.valor =  Math.round((Math.random()*6));
    //   }
       
    // } while (this.numeros[0] === this.valor );

    this.estadoCuadro = this.estadoCuadro === "inicio" ? "final" : "inicio";
   }
}