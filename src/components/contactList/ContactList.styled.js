import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Li = styled.li`
  display: grid;
  grid-template-columns: 3fr 40px 40px;
  margin-bottom: 16px;
  align-items: center;
  border-radius: 5px;
  padding-left: 9px;
`;

const Ul = styled.ul`
  margin: 0;
  padding-left: 0;
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 18px;
  margin-right: 20px;
`;

const DeleteButton = styled(DeleteIcon)`
  fill: blue;
  &:hover {
    scale: 1.5;
  }
`;

const EditButton = styled(EditIcon)`
  color: blue;
  &:hover {
    scale: 1.5;
  }
`;

export { Li, Ul, Paragraph, DeleteButton, EditButton };
