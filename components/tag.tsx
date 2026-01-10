interface TagProps {
  content: string;
  variant?: 'success' | 'error' | 'warning';
  className?: string;
}

const variantsStyle = {
  success: 'bg-success-200 text-success-600',
  error: 'bg-error-200 text-error-600',
  warning: 'bg-warning-200 text-warning-600'
};

export function Tag({ content, variant = 'success', className = '' }: TagProps) {
  return (
    <span
      className={`rounded-full py-3xs px-2xs flex items-center justify-center uppercase b-2  ${variantsStyle[variant]} ${className}`}
    >
      {content}
    </span>
  );
}
