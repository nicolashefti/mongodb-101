use students

db.grades.find({ score : { $gte:65}}).sort({ score:1})
