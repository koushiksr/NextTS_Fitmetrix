import { getSchoolGirlsCount, getSchoolStudentsCount, getSchoolBoysCount } from './actions/actions';
import { Typography, Grid } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default async function Page() {
  const schoolID = 'KPHCB00003';
  const [studentsCount, boysCount, girlsCount] = await Promise.all([getSchoolStudentsCount(schoolID), getSchoolBoysCount(schoolID), getSchoolGirlsCount(schoolID)]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-stretch mx-auto w-full max-w-[1440px] h-full">
        <Grid container spacing={2} justifyContent="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardHeader>
                <CardTitle>Total Students</CardTitle>
                <CardDescription>Total Students</CardDescription>
              </CardHeader>
              <CardContent>
                <p> {studentsCount}</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardHeader>
                <CardTitle>Boys Count</CardTitle>
                <CardDescription>Boys Count</CardDescription>
              </CardHeader>
              <CardContent>
                <p> {boysCount}</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardHeader>
                <CardTitle>Girls Count</CardTitle>
                <CardDescription>Girls Count</CardDescription>
              </CardHeader>
              <CardContent>
                <p> {girlsCount}</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div className="flex justify-center items-stretch mx-auto w-full max-w-[1440px] h-full"></div>
    </div>
  );
}
