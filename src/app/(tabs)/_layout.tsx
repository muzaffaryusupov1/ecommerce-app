import { Tabs } from 'expo-router';

import {
  HomeTabIcon,
  NotificationTabIcon,
  ProfileTabIcon,
  SavedTabIcon,
} from '@/components/icons';

const ACTIVE_COLOR = '#7C5CFF';
const INACTIVE_COLOR = '#9A9A9A';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarStyle: {
          backgroundColor: '#ECECEC',
          borderTopWidth: 0,
          elevation: 0,
          height: 84,
          paddingTop: 14,
          paddingBottom: 16,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeTabIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) => <NotificationTabIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon: ({ color }) => <SavedTabIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <ProfileTabIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen name="explore" options={{ href: null }} />
    </Tabs>
  );
}
