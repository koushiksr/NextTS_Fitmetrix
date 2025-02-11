'use client';

import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { assessmentSchema, AssessmentType } from '@/schemas/assessmentSchema'; // Import the schema
import { createPost } from '@/app/assessor/actions/actions'; // Assuming the actions are in this file
import { FormInput } from './FormInput';

const LargeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AssessmentType>({
    resolver: zodResolver(assessmentSchema), // Use the imported schema for validation
  });

  const { toast } = useToast();

  const onSubmit = async (data: AssessmentType) => {
    console.log(data);
    try {
      const response = await createPost(data); // You can pass the form data here

      if (response?.error) {
        console.error('Error creating assessment:', response.error);
        toast({
          title: 'Error',
          description: response.error,
        });
      } else {
        console.log('Assessment created successfully');
        toast({
          title: 'Success',
          description: 'Assessment created successfully',
        });
      }
    } catch (error) {
      console.error('Error creating assessment:', error);
      toast({
        title: 'Error',
        description: 'An error occurred while creating the assessment.',
      });
    }
  };

  return (
    <div className="flex flex-col max-w-[1440px] m-auto gap-4 p-6  rounded-lg shadow-lg">
      <h1 className="font-bold text-3xl text-center text-blue-600">Add Assessment</h1>

      <Card className="flex justify-start gap-4 p-6  rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-[84vh] overflow-auto " style={{ scrollbarWidth: 'none' }}>
          <Card className="flex flex-wrap justify-start gap-4 p-6 my-4 rounded-2xl  shadow-sm overflow-auto">
            <FormInput type="text" placeholder="School ID" register={register} name="schoolId" error={errors.schoolId} />
            <FormInput type="text" placeholder="Student ID" register={register} name="studentId" error={errors.studentId} />
            <FormInput type="text" placeholder="Assessment Team" register={register} name="assessmentTeam" error={errors.assessmentTeam} />
            <FormInput type="date" placeholder="Assessment Date" register={register} name="assessmentDate" error={errors.assessmentDate} />
            <FormInput type="text" placeholder="Assessment ID" register={register} name="assessmentId" error={errors.assessmentId} />
          </Card>

          {/* Physical Details */}
          <h1 className="font-thin ml-6 mt-6 text-xl text-center text-blue-600">Physical Details</h1>
          <Card className="grid grid-cols-4 gap-4 p-6 my-4 rounded-2xl   shadow-sm">
            <p className="text-sm font-medium ml-6 mt-6">Height (cm)</p>
            <FormInput type="text" placeholder="Height (cm)" register={register} name="heightCms" error={errors.heightCms} />
            <FormInput type="text" placeholder="Height Rating" register={register} name="heightRating" error={errors.heightRating} />
            <FormInput type="text" placeholder="Height Comment" register={register} name="heightComment" error={errors.heightComment} />

            <p className="text-sm font-medium ml-6 mt-6">Weight (kg)</p>
            <FormInput type="text" placeholder="Weight (kg)" register={register} name="weightKg" error={errors.weightKg} />
            <FormInput type="text" placeholder="Weight Rating" register={register} name="weightRating" error={errors.weightRating} />
            <FormInput type="text" placeholder="Weight Comment" register={register} name="weightComment" error={errors.weightComment} />
            <span></span>
            <span></span>
            <span></span>
            <FormInput type="text" placeholder="Height & Weight Comment" register={register} name="heightWeightComment" error={errors.heightWeightComment} />

            <p className="text-sm font-medium ml-6 mt-6">BMI</p>
            <FormInput type="text" placeholder="BMI" register={register} name="bmi" error={errors.bmi} />
            <FormInput type="text" placeholder="BMI Rating" register={register} name="bmiRating" error={errors.bmiRating} />
            <FormInput type="text" placeholder="BMI Comment" register={register} name="bmiComment" error={errors.bmiComment} />

            <p className="text-sm font-medium ml-6 mt-6">Body Fat Percentage</p>
            <FormInput type="text" placeholder="Body Fat Percentage" register={register} name="bodyFatPercentage" error={errors.bodyFatPercentage} />
            <FormInput type="text" placeholder="Body Fat Rating" register={register} name="bodyFatRating" error={errors.bodyFatRating} />
            <FormInput type="text" placeholder="Body Fat Comment" register={register} name="bodyFatComment" error={errors.bodyFatComment} />
            <span></span>
            <span></span>
            <span></span>
            <FormInput type="text" placeholder="BMI & Body Fat Comment" register={register} name="bmiBodyfatComment" error={errors.bmiBodyfatComment} />

            <p className="text-sm font-medium ml-6 mt-6">Arm Length (cm)</p>
            <FormInput type="text" placeholder="Arm Length (cm)" register={register} name="armLengthCms" error={errors.armLengthCms} />
            <FormInput type="text" placeholder="Arm Length Rating" register={register} name="armLengthRating" error={errors.armLengthRating} />
            <FormInput type="text" placeholder="Arm Length Comment" register={register} name="armLengthComment" error={errors.armLengthComment} />

            <p className="text-sm font-medium ml-6 mt-6">Leg Length (cm)</p>
            <FormInput type="text" placeholder="Leg Length (cm)" register={register} name="legLengthCms" error={errors.legLengthCms} />
            <FormInput type="text" placeholder="Leg Length Rating" register={register} name="legLengthRating" error={errors.legLengthRating} />
            <FormInput type="text" placeholder="Leg Length Comment" register={register} name="legLengthComment" error={errors.legLengthComment} />

            <p className="text-sm font-medium ml-6 mt-6">Sit and Reach (cm)</p>
            <FormInput type="text" placeholder="Sit and Reach (cm)" register={register} name="sitAndReachCms" error={errors.sitAndReachCms} />
            <FormInput type="text" placeholder="Sit and Reach Rating" register={register} name="sitAndReachRating" error={errors.sitAndReachRating} />
            <FormInput type="text" placeholder="Sit and Reach Comment" register={register} name="sitAndReachComment" error={errors.sitAndReachComment} />

            <p className="text-sm font-medium ml-6 mt-6">Single Leg Balance</p>
            <FormInput type="text" placeholder="Single Leg Balance" register={register} name="singleLegBalance" error={errors.singleLegBalance} />
            <FormInput type="text" placeholder="Single Leg Balance Rating" register={register} name="singleLegBalanceRating" error={errors.singleLegBalanceRating} />
            <FormInput type="text" placeholder="Single Leg Balance Comment" register={register} name="singleLegBalanceComment" error={errors.singleLegBalanceComment} />

            <p className="text-sm font-medium ml-6 mt-6">Push-ups</p>
            <FormInput type="text" placeholder="Push-ups" register={register} name="pushUps" error={errors.pushUps} />
            <FormInput type="text" placeholder="Push-ups Rating" register={register} name="pushUpsRating" error={errors.pushUpsRating} />
            <FormInput type="text" placeholder="Push-ups Comment" register={register} name="pushUpsComment" error={errors.pushUpsComment} />

            <p className="text-sm font-medium ml-6 mt-6">Grip Strength (kg)</p>
            <FormInput type="text" placeholder="Grip Strength (kg)" register={register} name="gripStrengthKgs" error={errors.gripStrengthKgs} />
            <FormInput type="text" placeholder="Grip Strength Rating" register={register} name="gripStrengthRating" error={errors.gripStrengthRating} />
            <FormInput type="text" placeholder="Grip Strength Comment" register={register} name="gripStrengthComment" error={errors.gripStrengthComment} />

            <p className="text-sm font-medium ml-6 mt-6">Squat Test (30 secs)</p>
            <FormInput type="text" placeholder="Squat Test (30 secs)" register={register} name="squatTest30Secs" error={errors.squatTest30Secs} />
            <FormInput type="text" placeholder="Squat Test Rating" register={register} name="squatTestRating" error={errors.squatTestRating} />
            <FormInput type="text" placeholder="Squat Test Comment" register={register} name="squatTestComment" error={errors.squatTestComment} />

            <p className="text-sm font-medium ml-6 mt-6">Plank (secs)</p>
            <FormInput type="text" placeholder="Plank (secs)" register={register} name="plankSecs" error={errors.plankSecs} />
            <FormInput type="text" placeholder="Plank Rating" register={register} name="plankRating" error={errors.plankRating} />
            <FormInput type="text" placeholder="Plank Comment" register={register} name="plankComment" error={errors.plankComment} />

            <p className="text-sm font-medium ml-6 mt-6">Standing Long Jump (cm)</p>
            <FormInput type="text" placeholder="Standing Long Jump (cm)" register={register} name="standingLongJumpCms" error={errors.standingLongJumpCms} />
            <FormInput type="text" placeholder="Standing Long Jump Rating" register={register} name="standingLongJumpRating" error={errors.standingLongJumpRating} />
            <FormInput type="text" placeholder="Standing Long Jump Comment" register={register} name="standingLongJumpComment" error={errors.standingLongJumpComment} />

            <p className="text-sm font-medium ml-6 mt-6">Standing Vertical Jump (inches)</p>
            <FormInput type="text" placeholder="Standing Vertical Jump (inches)" register={register} name="standingVerticalJumpInches" error={errors.standingVerticalJumpInches} />
            <FormInput type="text" placeholder="Standing Vertical Jump Rating" register={register} name="standingVerticalJumpRating" error={errors.standingVerticalJumpRating} />
            <FormInput type="text" placeholder="Standing Vertical Jump Comment" register={register} name="standingVerticalJumpComment" error={errors.standingVerticalJumpComment} />

            <p className="text-sm font-medium ml-6 mt-6">505 Test (secs)</p>
            <FormInput type="text" placeholder="505 Test (secs)" register={register} name="fiveZeroFiveSecs" error={errors.fiveZeroFiveSecs} />
            <FormInput type="text" placeholder="505 Test Rating" register={register} name="fiveZeroFiveRating" error={errors.fiveZeroFiveRating} />
            <FormInput type="text" placeholder="505 Test Comment" register={register} name="fiveZeroFiveComment" error={errors.fiveZeroFiveComment} />

            <p className="text-sm font-medium ml-6 mt-6">30m Speed Test (secs)</p>
            <FormInput type="text" placeholder="30m Speed Test (secs)" register={register} name="speed30MtrsSecs" error={errors.speed30MtrsSecs} />
            <FormInput type="text" placeholder="30m Speed Test Rating" register={register} name="speed30MtrsRating" error={errors.speed30MtrsRating} />
            <FormInput type="text" placeholder="30m Speed Test Comment" register={register} name="speed30MtrsComment" error={errors.speed30MtrsComment} />

            <p className="text-sm font-medium ml-6 mt-6">600m (mins)</p>
            <FormInput type="text" placeholder="600m (mins)" register={register} name="sixHundredMtrsMins" error={errors.sixHundredMtrsMins} />
            <FormInput type="text" placeholder="600m Rating" register={register} name="sixHundredMtrsRating" error={errors.sixHundredMtrsRating} />
            <FormInput type="text" placeholder="600m Comment" register={register} name="sixHundredMtrsComment" error={errors.sixHundredMtrsComment} />

            <p className="text-sm font-medium ml-6 mt-6">Bear Position Hold</p>
            <FormInput type="text" placeholder="Bear Position Hold" register={register} name="bearPositionHold" error={errors.bearPositionHold} />
            <FormInput type="text" placeholder="Bear Position Hold Rating" register={register} name="bearPositionHoldRating" error={errors.bearPositionHoldRating} />
            <FormInput type="text" placeholder="Bear Position Hold Comment" register={register} name="bearPositionHoldComment" error={errors.bearPositionHoldComment} />

            <p className="text-sm font-medium ml-6 mt-6">Overhead Squats</p>
            <FormInput type="text" placeholder="Overhead Squats" register={register} name="overheadSquats" error={errors.overheadSquats} />
            <FormInput type="text" placeholder="Overhead Squats Rating" register={register} name="overheadSquatsRating" error={errors.overheadSquatsRating} />
            <FormInput type="text" placeholder="Overhead Squats Comment" register={register} name="overheadSquatsComment" error={errors.overheadSquatsComment} />

            <p className="text-sm font-medium ml-6 mt-6">Lunges Test</p>
            <FormInput type="text" placeholder="Lunges Test" register={register} name="lungesTest" error={errors.lungesTest} />
            <FormInput type="text" placeholder="Lunges Test Rating" register={register} name="lungesRating" error={errors.lungesRating} />
            <FormInput type="text" placeholder="Lunges Test Comment" register={register} name="lungesComment" error={errors.lungesComment} />
          </Card>

          {/* Remarks */}
          <h1 className="font-thin ml-6 mt-6 text-xl text-center text-blue-600">Remarks</h1>
          <Card className="flex flex-wrap justify-between gap-4 p-6 my-4 rounded-2xl  shadow-sm w-full">
            <textarea className="w-[30%] min-w-[12rem] border-2 border-gray-700 rounded-md" placeholder="Remark 1" {...register('remark1')} />
            <textarea className="w-[30%] min-w-[12rem] border-2 border-gray-700 rounded-md" placeholder="Remark 2" {...register('remark2')} />
            <textarea className="w-[30%] min-w-[12rem] border-2 border-gray-700 rounded-md" placeholder="Remark 3" {...register('remark3')} />
          </Card>
          {/* </Card> */}

          {/* Submit Button */}

          <Button variant={'solid'} className="mt-6 max-w-sm bg-blue-600 text-white hover:bg-blue-700" type="submit">
            Create Assessment
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default LargeForm;
