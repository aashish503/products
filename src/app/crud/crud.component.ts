import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  userForm:FormGroup;
  listData:any;

  constructor(private fb:FormBuilder) { 

    this.listData=[];

    this.userForm = this.fb.group ({
      Id:[ '', Validators.required],
      Name:['',Validators.required],
      CategoryName:['',Validators.required],
      CategoryId:['',Validators.required],
      })
  }
  public addItem():void{
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }
  reset(){
    this.userForm.reset();
  }
  // removeItem(element){
  //   this.listData.forEach((value,index)=>{
  //     if(value == element)
  //     this.listData.splice(index,1);
  //   });
  // }
  ngOnInit(): void {
  }
 
}
