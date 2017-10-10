import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistComponent implements OnInit {

patients: Object[];


  constructor() {

 }


  ngOnInit() {


this.patients = [  

{ firstName: 'Hieu', lastName: 'Pham', emailAddress:'dachieu1701@yahoo.com',doctorLastName:'Jane'} ,

{ firstName: 'Trung', lastName: 'Pham', emailAddress:'trung@mail.com', doctorLastName:'Nga'} ,

{ firstName: 'Duyen', lastName: 'Pham', emailAddress:'duyen@yahoo.com',doctorLastName:'Cuong'} ,

{ firstName: 'Tuan', lastName: 'Pham', emailAddress:'trung@mail.com', doctorLastName:'Scotch'} ,

{ firstName: 'Vinh', lastName: 'Pham', emailAddress:'ving@yahoo.com',doctorLastName:'Droke'} ,

{ firstName: 'Le', lastName: 'Dang', emailAddress:'leDang@mail.com', doctorLastName:'Fam'} ,

{ firstName: 'Milkie', lastName: 'Mussa', emailAddress:'mmussa@yahoo.com',doctorLastName:'Jer'} ,

{ firstName: 'Kyle', lastName: 'Young', emailAddress:'kyle@mail.com', doctorLastName:'Nga'} ,

{ firstName: 'Phu', lastName: 'Duong', emailAddress:'dachieu1701@yahoo.com',doctorLastName:'Weed'} ,

{ firstName: 'Jeremy', lastName: 'Buhrman', emailAddress:'jer@mail.com', doctorLastName:'Nga'} 

] ;



  }

}
