import { PhonicsWorksheet } from '@/data/worksheets';
import TracingWorksheet from './TracingWorksheet';
import MatchingWorksheet from './MatchingWorksheet';
import FillBlankWorksheet from './FillBlankWorksheet';

interface WorksheetRendererProps {
  worksheet: PhonicsWorksheet;
}

export default function WorksheetRenderer({ worksheet }: WorksheetRendererProps) {
  switch (worksheet.type) {
    case 'tracing':
      return <TracingWorksheet worksheet={worksheet} />;
    case 'matching':
      return <MatchingWorksheet worksheet={worksheet} />;
    case 'fill-blank':
      return <FillBlankWorksheet worksheet={worksheet} />;
    default:
      return <div>Unknown worksheet type</div>;
  }
}
