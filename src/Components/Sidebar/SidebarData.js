import CheckBoxIcon from '@material-ui/icons/CheckBox';
import NotesIcon from '@material-ui/icons/Notes';
import TimelapseIcon from '@material-ui/icons/Timelapse';

const SidebarData = [
  {
    link: '/todos',
    title: 'Todos',
    icon: <CheckBoxIcon />,
  },
  {
    link: '/notes',
    title: 'Notes',
    icon: <NotesIcon />,
  },
  {
    link: '/timetracker',
    title: 'Time Tracker',
    icon: <TimelapseIcon />,
  },
];

export default SidebarData;
