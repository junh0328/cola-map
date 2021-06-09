import { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import { TitleInput, SubmitButton } from './style';
import CommonLayout from '../../components/CommonLayout';
import PersonalHeader from '../../components/PersonalHeader';

const Question = () => {
  const titleRef = useRef();
  const contentRef = useRef();

  const handleSubmit = () => {
    const title = titleRef.current;
    const content = contentRef.current;

    console.log(`title: ${title.value}`);
    console.log(`content: ${content.getInstance().getHtml()}`);

    title.value = '';
    content.getInstance().reset();
  };
  return (
    <CommonLayout>
      <PersonalHeader title="문의하기" />
      <TitleInput placeholder="제목을 입력해주세요." ref={titleRef} />
      <Editor
        initialEditType="wysiwyg"
        previewType="vertical"
        hideModeSwitch="true"
        placeholder="문의사항을 입력해주세요."
        height={'55%'}
        ref={contentRef}
      />
      <SubmitButton onClick={handleSubmit}>문의하기</SubmitButton>
    </CommonLayout>
  );
};

export default Question;
