import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class thisForm extends React.Component {


  new = horns => this.props.update(horns);

  filter = (event) => {
    event.preventDefault();
    this.props.filterData(event);
  }

  render() {
    return (
      <Form onSubmit={this.filter}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Choose Number of Horns: </Form.Label>
          <Form.Control onChange={this.new} as="select" name="numberOfHorns" defaultValue={'All'}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="All">All</option>
          </Form.Control>
          <Button variant="primary" type="submit">
            Filter
          </Button>
        </Form.Group>
      </Form>
    );
  }

}

export default thisForm;