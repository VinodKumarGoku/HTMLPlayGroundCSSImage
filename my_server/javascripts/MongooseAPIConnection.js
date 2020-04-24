var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/images', {useNewUrlParser: true,  useUnifiedTopology: true});

var mongoosedb = mongoose.connection;
mongoosedb.on('error', console.error.bind(console, 'connection error:'));
mongoosedb.once('open', function() {
  // we're connected!
});


// Image Category Section 
var category_main_section = new mongoose.Schema({
    name: String
  });

var CategoryMain = mongoose.model('category_main_section', category_main_section);
var CategoryMainSectionOptions = mongoose.model('category_main_section_options', category_main_section);
var CategorySubSectionOptions = mongoose.model('category_sub_sections_options', category_main_section);

module.exports = {

  createenrty_picture: function(image_location) {
      var silence = new CategoryMain({ name: image_location });
      console.log(silence.name); // 'Silence'
      
      silence.save();
  },

  get_data_from_main_target_image_collection: async function(section_name) {
    //console.log("Starting to find data from main element section");
    var list_of_elements = [];
    var queryoperation;
    if(section_name == 'MainTargetImage')
    { 
      queryoperation = CategoryMain.find(); 
    }
    else if(section_name == 'MainSectionOptions')
    { 
      //console.log("Reached Here");
      
      queryoperation = CategoryMainSectionOptions.find(); 
    }
    else 
    { 
      queryoperation = CategorySubSectionOptions.find(); 
    }

    /*
    queryoperation.select({name: true}).
                          exec().then(docs => {
                              //console.log(docs[0].name)
                              list_of_elements.push(docs[1].name);
                            }).then(err => {
                              console.log(list_of_elements);
                            })
                          .catch(err => {
                              console.error(err)
                            })
    */
    
    var list_of_documents = [];
    var full_complete;
    await queryoperation.select({name: true}).exec()
                                        .then(db_documents => {
                                            db_documents.forEach((individual_docs, index) => {
                                            list_of_documents.push(db_documents[index].name);
                                            });
                                            full_complete = true;
                                        });
    //console.log(list_of_documents);
    return new Promise((resolve,reject) => {
      if(full_complete)
      {
        resolve(list_of_documents);
        //console.log("Sending Prmoise for docs " + list_of_documents);
        
      }
      else reject('Operation Failed')
    });
    
  }

}