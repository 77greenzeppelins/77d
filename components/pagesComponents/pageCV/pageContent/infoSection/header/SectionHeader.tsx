import React from 'react';

const SectionHeader = ({ text }: { text: string }) => {
  return (
    <h3 className="w-full relative h-[28px]">
      <p className="font-serif uppercase p-regular text-corpo">{text}</p>
      <span className="absolute inset-x-0 bottom-0  border-b border-corpo w-full h-[1px]" />
    </h3>
  );
};

export default SectionHeader;
