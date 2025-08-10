# skillbrain-galaxy

## Comenzi utile de Linux (care merg in gitbash):

- "cd giskillbrain-galaxy" - schimbam folderul in folderul "git"
- "cd .." - schimbam folderul parinte
- "ls" - vedem ce se afla in interiorul dosarului curent
- "pwd" - vedem path (locatia) directorului curent
- "CTRL + C" - abandonam comanda

## GIT: cum incepem o tema noua?

- opt 'git status' - o comanda importanta, inofensiva (optionala), care ne arata statutul git-ului
- 'git checkout main' - ne mutam in branch-ul de baza cu numele "main"
- opt 'git fetch' - sincronizeaza codul de pe git hub cu dosarul local. Nu modifica nimic local, doar e sincronizat
- opt 'git pull origin main' - actualizam branch-ul "main" din git hub in local
- 'git checkout -b sprint2' - se creeaza un branch nou cu numele sprint2
- incepem lucru: creem un dosar nou "sprint2" si punem acolo toate fisierele necesare

- Cand terminam lucrul:
- 'git add .'
- 'git commit -m "Am adaugat dosarul tema2 cu tema facuta"
- 'git push origin sprint2'
- creem un nou Pull Request (PR)
- creem un ticket pe notion cu link-ul la PR
- asteptam PR sa fie confirmat
- apasam pe Merge la PR
