const container = document.querySelector(".container");
const button = document.querySelector("#btn");
const output_num = document.querySelector("#output")

button.addEventListener("click", function()
{
    let num = prompt("Please enter the  number of squares per side for the new grid")

    num = Number(num);

    create_grid(num);

});

function create_grid(num)
{
    if(num > 100)
            alert("Invalid input!")


    container.innerHTML = "";
    for(let i = 0; i < num*num; i++)
    {
        const square = document.createElement("div");
        square.classList.add("square")
        

        square.style.width = `${960/num}px`;
        square.style.height = `${960/num}px`;

        square.addEventListener("mouseover", function () 
        {
            square.style.backgroundColor = "red";
            
        });

        container.appendChild(square);
    }
}






