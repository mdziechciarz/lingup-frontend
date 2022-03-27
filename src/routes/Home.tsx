import MainTemplate from 'templates/MainTemplate';
import RoomsControlPanel from 'components/RoomsControlPanel';
import RoomsList from 'components/RoomsList';

const HomeView = (): JSX.Element => (
  <MainTemplate>
    <RoomsControlPanel />
    <RoomsList />
  </MainTemplate>
);

export default HomeView;
