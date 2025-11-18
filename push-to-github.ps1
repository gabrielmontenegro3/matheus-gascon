# Script para fazer push do projeto para o GitHub
$ErrorActionPreference = "Stop"

# Navegar para o diretório do projeto
$projectPath = "C:\Users\pc\Desktop\SITES PROSPECÇÃO\Matheus Gascon"
Set-Location $projectPath

Write-Host "Diretório atual: $(Get-Location)"

# Remover repositório Git do diretório do usuário se existir
if (Test-Path "C:\Users\pc\.git") {
    Remove-Item -Path "C:\Users\pc\.git" -Recurse -Force
    Write-Host "Removido repositório Git do diretório do usuário"
}

# Remover repositório Git do projeto se existir
if (Test-Path ".git") {
    Remove-Item ".git" -Recurse -Force
    Write-Host "Removido repositório Git existente"
}

# Inicializar Git
git init
Write-Host "Git inicializado"

# Adicionar arquivos do projeto
git add src/
git add public/
git add index.html
git add package.json
git add package-lock.json
git add tsconfig.json
git add tsconfig.node.json
git add vite.config.ts
git add tailwind.config.js
git add postcss.config.js
git add .gitignore
git add README.md
Write-Host "Arquivos adicionados"

# Fazer commit
git commit -m "Initial commit"
Write-Host "Commit criado"

# Adicionar remote
git remote add origin git@github.com:gabrielmontenegro3/matheus-gascon.git 2>&1 | Out-Null
Write-Host "Remote adicionado"

# Renomear branch para main
git branch -M main
Write-Host "Branch renomeada para main"

# Fazer push
git push -u origin main
Write-Host "Push concluído com sucesso!"

