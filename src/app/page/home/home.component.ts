import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../service/peticiones/peticiones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  IDUS:string | null = '';
  //Get note
  notes:any;
  //Create note
  titleNewNote:string = '';
  descNewNote:string = '';
  //Edit Note 
  edit:boolean = false;
  titleEditNote:string = '';
  descEditNote:string = '';


  constructor(private peticionesService: PeticionesService){}

  ngOnInit(): void {
    
     this.IDUS = sessionStorage.getItem('id');
    // console.log('id',this.IDUS)
  
    this.getNotes(this.IDUS)
  }

  async createNote(){
    console.log('id', this.IDUS)
    if(this.titleNewNote.trim() =='' && this.descNewNote.trim() == ''){
      window.alert('No puede crear una nota vacia, favor de llenar al menos un campo');
    }else{
      await this.peticionesService.createNote(this.titleNewNote, this.descNewNote, false, this.IDUS).then((data:any) => {
        console.log('data', data)
        let responseData  = data;
        this.titleNewNote = ''
        this.descNewNote = ''
        if(responseData.status){
          this.getNotes(this.IDUS).then(()=>{
            window.alert(responseData.message);
          })  
        }else{
          window.alert(responseData.error);
        }
      }).catch((e)=>{
        console.log('e: ',e)
        // window.alert(responseData.error); 
      })
    }

  }

  async updateNote(nota_id:any, i:any){
    this.peticionesService.editNote(this.notes[i].editTitle , this.notes[i].editDescription, this.IDUS, nota_id ).then((data:any) =>{
      let responseData = data;
      console.log('data edit:', responseData);
      this.notes[i].is_processed = !this.notes[i].is_processed;
      
      if(responseData.status){
        this.getNotes(this.IDUS)
        window.alert(responseData.message);
      }
      
    }).catch(()=>{
      console.log('a');
      this.notes[i].is_processed = !this.notes[i].is_processed;
    })

  }
  async viewEditNote(i:any){
    this.notes[i].is_processed = !this.notes[i].is_processed 
    if(!this.notes[i].is_processed){
      console.log('enif')
      this.notes[i].editTitle = this.notes[i].title 
      this.notes[i].editDescription = this.notes[i].description
    }
    // this.edit = !this.edit;editDescription
  }

  async deleteNote(idNote:number){
    await this.peticionesService.deleteNote(idNote,  this.IDUS).then((data:any) => {
      let responseData = data;
      this.getNotes(this.IDUS)
    })
  }

  async getNotes(idUs:any){
    await this.peticionesService.getNotes(idUs).then((data:any)=>{
      let responseData = data;
      this.notes = responseData;
     
      for(let i = 0; i < this.notes.length; i++ ){
        this.notes[i]['editTitle'] = this.notes[i].title 
        this.notes[i]['editDescription'] = this.notes[i].description 
      }
      console.log('notes: ', this.notes)
      // console.log("ok data: ", responseData)
    }).catch((e)=>{
      console.log("error: ", e)
    })
  }

  
  
}
