
function one(){
    
        $("#js-shopping-list-form").submit(function(event){
            event.preventDefault();
            const gotEntry = $(event.currentTarget).find('#shopping-list-entry');
            let entry = gotEntry.val()
           
            var txt1 = "<p>Text.</p>";               // Create element with HTML 
            var txt2 = $("<p></p>").text("Text.");   // Create with jQuery

            let literal = `<li>
            <span class="shopping-item">${entry}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`;
            
            $("ul").append(literal);
            
        });
    
    }

function two(){
       $('ul').on("click", ".shopping-item-toggle", function(event) {
            $(this).closest( "li" ).toggleClass( "shopping-item__checked" );
        });     
    }

function three(){
        $("ul").on("click", ".shopping-item-delete", function(event) {
            $(this).closest( "li" ).remove();
        });     
    }

$(document).ready(one(), two(), three());
    
