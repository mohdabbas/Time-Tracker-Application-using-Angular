import { Component, OnInit } from '@angular/core';
import { Project } from '../../classes/project';
@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  public addProjectFlag=false;
  public projects=[];
  public project={};
  ngOnInit() {
  }

  public addProjectClicked(){
    if(this.addProjectFlag===true){
      this.addProjectFlag=false;
    }else{
      this.addProjectFlag=true;
    }
  }

  public addProject(project:Project){
    this.projects.push(project);
  }

  get diagnostic() { return JSON.stringify(this.projects); }

}
