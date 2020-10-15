//STEP 1
window.console.log("STEP 1");
var array1= ["The Godfather","The Shawshank Redemption","Schindler's List","Citizen Kane","The Godfather Part II"];
window.console.log(array1[1]);
//STEP 2
window.console.log("STEP 2");
var movies=new Array(5);
movies[0]="The Godfather";
movies[1]="The Shawshank Redemption";
movies[2]="Schindler's List";
movies[3]="Citizen Kane";
movies[4]="The Godfather Part II";
window.console.log(movies[0]);
//STEP 3
window.console.log("STEP 3");
var movies=new Array(5);
movies[0]="The Godfather";
movies[1]="The Shawshank Redemption";
movies[2]="Schindler's List";
movies[3]="Citizen Kane";
movies[4]="The Godfather Part II";
movies.splice(2, 0, "three");
window.console.log(movies.length);
//STEP 4
window.console.log("STEP 4");
var movies= [];
movies[0]="The Godfather";
movies[1]="The Shawshank Redemption";
movies[2]="Schindler's List";
movies[3]="Citizen Kane";
movies[4]="The Godfather Part II";
delete movies[0];
window.console.log(movies);
//STEP 5
window.console.log("STEP 5");
var movies= [];
movies[0]="The Godfather";
movies[1]="The Shawshank Redemption";
movies[2]="Schindler's List";
movies[3]="Citizen Kane";
movies[4]="The Godfather Part II";
movies[5]="Shichinin no samurai";
movies[6]="Star Wars";
for(var i=0;i<movies.length;i++){
    window.console.log(movies[i]);
}
//STEP 6
window.console.log("STEP 6");
var movies= [];
movies[0]="The Godfather";
movies[1]="The Shawshank Redemption";
movies[2]="Schindler's List";
movies[3]="Citizen Kane";
movies[4]="The Godfather Part II";
movies[5]="Shichinin no samurai";
movies[6]="Star Wars";
for (i in movies){
    window.console.log(movies[i]);
}
//STEP 7
window.console.log("STEP 7");
var movies= [];
movies[0]="The Godfather";
movies[1]="The Shawshank Redemption";
movies[2]="Schindler's List";
movies[3]="Citizen Kane";
movies[4]="The Godfather Part II";
movies[5]="Star Wars";
movies[6]="Shichinin no samurai";
movies=movies.sort();
for (i in movies){
    window.console.log(movies[i]);
}
//STEP 8
window.console.log("STEP 8");
var movies= [];
movies[0]="The Godfather";
movies[1]="The Shawshank Redemption";
movies[2]="Schindler's List";
movies[3]="Citizen Kane";
movies[4]="The Godfather Part II";
movies[5]="Shichinin no samurai";
movies[6]="Star Wars";
var leastFavMovies=["Born To Be A Star","Spy Next Door","A Thousand Words"];
window.console.log("Movies I like:");
window.console.log("");
for (i in movies){
    window.console.log(movies[i]);
}
window.console.log("");
window.console.log("Movies I regret watching:");
window.console.log("");
for (i in leastFavMovies){
    window.console.log(leastFavMovies[i]);
}
//STEP 9
window.console.log("STEP 9");
var movies= [];
movies[0]="The Godfather";
movies[1]="The Shawshank Redemption";
movies[2]="Schindler's List";
movies[3]="Citizen Kane";
movies[4]="The Godfather Part II";
movies[5]="Shichinin no samurai";
movies[6]="Star Wars";
var leastFavMovies=["Born To Be A Star","Spy Next Door","A Thousand Words"];
movies=movies.concat(leastFavMovies);
movies=movies.sort();
movies=movies.reverse();
window.console.log(movies);
//STEP 10
window.console.log("STEP 10");
var movies= [];
movies[0]="The Godfather";
movies[1]="The Shawshank Redemption";
movies[2]="Schindler's List";
movies[3]="Citizen Kane";
movies[4]="The Godfather Part II";
movies[5]="Shichinin no samurai";
movies[6]="Star Wars";
var leastFavMovies=["Born To Be A Star","Spy Next Door","A Thousand Words"];
movies=movies.concat(leastFavMovies);
movies=movies.sort();
movies=movies.reverse();
window.console.log(movies.pop());


