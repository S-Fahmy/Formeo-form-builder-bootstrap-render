
      //the Class name of the section where the rendered form is going to appear 
      const renderedFormClassName = "rendered-form";

     /**
      * @goal get all formeo-row elements that are children of the rendered form class and loop through them.
      *  get and count the forme-columns belonging to the row and loop through them
      *  assign the correct bootstrap grid class for the columns and rows elements.
      *  remove the default formeo grid classes and custom Styles.
      */  
     function addBootstrapToRenderedForm() {
        const renderedForm = document.getElementsByClassName(renderedFormClassName);
        renderedForm[0].style.visibility = "hidden";

        const rows = renderedForm[0].getElementsByClassName("formeo-row");

        let bootstrapColsClasses;
        let rowColumns;

        for (let i = 0; i < rows.length; i++) {
          rows[i].className += " row";

          //get all columns per row
          rowColumns = rows[i].getElementsByClassName("formeo-column");

          bootstrapColsClasses = generateBootStrapColsClassName(rowColumns.length);

          for (let j = 0; j < rowColumns.length; j++) {
            let column = rowColumns[j];

            column.style.width = null;
            column.className += bootstrapColsClasses;
          }
        }

        removeFormeoGridClasses();
        renderedForm[0].style.visibility = "visible";
      }


      /**
       * @param columnsCount number of columns per row
       * @goal  calculate the right Bs class for the columns in a row
       * @TODO adjust the col width assignments according to the desired design and responsiveness.
       */
      function generateBootStrapColsClassName(columnsCount) {
        
        //TODO: how the assigned classes should be calculated more carefully later with the design in mind.
        let className;

        if (columnsCount <= 6) {
          if (columnsCount != 5) {
            let num = (12 / columnsCount) -1; //the -1 is to make space for the added margins between cols.
            className = " col-12 col-md-" + num;
          } else {
            className = " col-12 col-md-3";
          }
        } else {
          className = " col-12 col-md-3";
        }

        return " custom-col"+ className;
      }

      /**
       * removes the old formeo grid styles classes for the children of .render-form class.
       */
      function removeFormeoGridClasses() {
        $("." + renderedFormClassName + " .formeo-column").removeClass("formeo-column");
        $("." + renderedFormClassName + " .formeo-row").removeClass("formeo-row");
      }