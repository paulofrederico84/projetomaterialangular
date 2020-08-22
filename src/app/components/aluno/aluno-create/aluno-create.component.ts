import { AlunoService } from './../aluno.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {

  constructor(private alunoService: AlunoService,
    private router: Router) { }

  ngOnInit(): void {}

  createAluno(): void {
  this.alunoService.showMessage("Operação executada com sucesso!");
  }

  cancel() {
  this.router.navigate(['/aluno']);
  }
}
