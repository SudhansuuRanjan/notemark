import { AppLayout, Content, SideBar, ActionButtonRows, NotePreviewList } from '@/components';


function App(): JSX.Element {
  return (
    <AppLayout>

      <SideBar className='p-2 bg-gray-900 bg-opacity-30'>
        <ActionButtonRows className='flex justify-between mt-1 gap-2' />
        <NotePreviewList />
      </SideBar>

      <Content className='p-2'>
      </Content>

    </AppLayout>
  )
}

export default App
