import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container } from './styles';
import Actions from './actions';
import Requests from './requests';
import Responses from './responses';

export default function Dashboard() {
  return (
    <Container>
      <Requests />
      <Actions />
      <Responses />
    </Container>
  );
}
