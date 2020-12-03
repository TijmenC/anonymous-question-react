import { queryByTestId, render, screen, waitFor, fireEvent, getByText, toContainObject} from '@testing-library/react';
import axios from "axios";
import { MemoryRouter } from 'react-router-dom';
import React from "react"
import Question from "../src/components/Question"
import "regenerator-runtime/runtime.js";


import QuestionService from "../src/services/QuestionService";
import Poll from '../src/components/Poll';

jest.mock("../src/services/QuestionService");

const mockQuestion = { title: 'Title', description: 'Description', tag: 'Relationship', commentsenabled: 'false' }
const mockPolls = [{ poll: 'Answer 1'}]

describe("Question rendering test", () => {
  it.only('Test Question component renders', () => { 
       
    const { getByTestId, toContainObject } = render(<MemoryRouter initialEntries={["/"]}><Question question={mockQuestion} polls={mockPolls} /></MemoryRouter>);
       const mockFn = QuestionService.PostQuestion.mockImplementation(data => {
       console.log(data);
       return {response: {status: 200}
       }
       });
       const labelTitle = getByTestId("question-label-title");
       expect(labelTitle.textContent).toBe(mockQuestion.title);
       const labelDescription = getByTestId("question-label-description");
       expect(labelDescription.textContent).toBe(mockQuestion.description);
       const labelPolls = getByTestId("question-label-polls");
       expect(mockPolls).toContainEqual( // Compare values only.
        { poll: labelPolls.textContent }
      )
      // const { getByTestId } = render(<MemoryRouter initialEntries={["/"]}><Poll question={mockQuestion} polls={mockPolls} /></MemoryRouter>);
      //const inputTitle = getByText(mockQuestion.title);
      //  expect(inputTitle.textContent).toBe("Title");
  })
});