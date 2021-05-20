const { SP } = require('../model');

const createsp = async (req, res) => {
  console.log('Create SP Product data');

  const { Id,Name,Description,Image } = req.body;

  let status;
  let Message;

  try {
    const sp = new SP({ Id,Name,Description,Image });
    await sp.save();
    status = 200;
    Message = ' SP Product saved';
  } catch (err) {
    console.log('Error', err);
    console.log(err.stack);
    status = 400;
    Message = 'Bad request';
  }

  res.status(status).send({ Message });
}
const getAllSp = async (req, res) => {
    let status;
    let message;
  
    const { filterByName } = req.query;
    
    console.log(filterByName);
    try {
      const query = {};
      if (filterByName) {
        query['Name'] = filterByName;
      }
      message = await SP.find(query);
      status = 200;
    } catch(err) {
      console.log(' Error occured', err);
      console.log(err.stack);
      status = 400;
      message = 'Bad request'
    }
    
    res.status(status).send({ sp: message.map((sprod) => ({
      Id: sprod.Id,
      Name: sprod.Name,
      Description: sprod.Description,
      Image: sprod.Image,

    })) });
  }
 


 
  module.exports = {
    createsp
    ,getAllSp
    
  }
