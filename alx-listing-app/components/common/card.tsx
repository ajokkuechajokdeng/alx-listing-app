import React from 'react';
import { CardProps } from '@/interfaces/index';

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;

