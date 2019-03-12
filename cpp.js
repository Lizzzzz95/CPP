function ProgrammingLanguage(){
  this.name = 'Ruby';
  this.yearCreated = 1990;
};

function BritishValue(){
  this.shortForm = ['f&c', 'c', 'ct'];
  this.longForm = ['Fish & Chips', 'Curry', 'Chinese Takeaway'];
};

function Developer(){
  this.name = 'Lizzie';
  this.favouriteLanguage = 'JavaScript';
  this.languagesKnown = ['Ruby', 'JavaScript', 'HTML', 'CSS', 'SQL'];
};

Developer.prototype.learnNewLanguage = function(language){
  return this.languagesKnown.push(language);
};

function Cohort(){
  this.name = 'January 2019';
  this.startDate = '21/01/19';
  this.endDate = '12/04/19';
  this.developers = ['Lizzie', 'Simona', 'Christine', 'Leare', 'Reem', 'James'];
};

Cohort.prototype.addDeveloper = function(name){
  return this.developers.push(name);
};

Cohort.prototype.delayEndTo = function(date){
  return this.endDate = date;
};

function NoteBook(){
  return this.notes = ['Learn Java', 'Do Friday challenge'];
};

NoteBook.prototype.addNote = function(note){
  return this.notes.push(note);
};

NoteBook.prototype.viewAllNotes = function(){
  return this.notes;
};
