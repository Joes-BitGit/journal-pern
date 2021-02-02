import React from 'react'

const AddEntry = () => {
  return (
    <div>
      <form action="" method="post">
        <div className="form-row mb-3">
          <div className="col">
            <input type="text" name="location" className="form-control" placeholder="Location" />
          </div>
          <div className="col">
            <input type="date" name="date" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="feeling">Feeling Level</label>
          <select name="feeling" className="custom-select" defaultValue="Feeling">
            <option disabled >Feeling</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="personally-grateful">Personally Grateful</label>
          <textarea name="personally-grateful" cols="30" rows="5" className="form-control" placeholder="I am personally grateful for..."></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="professionally-grateful">Professionally Grateful</label>
          <textarea name="professionally-grateful" cols="30" rows="5" className="form-control" placeholder="I am professionally grateful for..."></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="mindfullness">Mindfullness</label>
          <textarea name="mindfullness" cols="30" rows="5" className="form-control" placeholder="What's on your mind today?"></textarea>
        </div>
        <label htmlFor="Goal">Goal</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="checkbox" />
            </div>
          </div>
          <input type="text" className="form-control" placeholder="Goal of the Day" />
        </div>
      </form>

    </div>
  )
}

export default AddEntry
