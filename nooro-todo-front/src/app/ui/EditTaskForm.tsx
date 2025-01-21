
const EditTaskForm = () => {


  return (
    <form>
      <label>
        Title:
        <input type="text"/>
      </label>
      <label>
        Color:
        <select>
          <option value="red">Red</option>
          <option value="blue">Yellow</option>
          <option value="yellow">Green</option>
        </select>
      </label>
      <button type="submit">Save Task</button>
    </form>
  );
};

export default EditTaskForm;